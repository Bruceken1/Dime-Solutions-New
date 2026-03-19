// supabase/functions/notify-submission/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

function esc(val: unknown): string {
  if (val === null || val === undefined) return ""
  return String(val)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>")
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { type, data } = await req.json()

    if (!type || !data) throw new Error("Missing type or data")

    const FROM           = Deno.env.get("RESEND_FROM_EMAIL") ?? "Dime Solutions <onboarding@resend.dev>"
    const businessEmail  = Deno.env.get("CONTACT_EMAIL")     ?? "support@dime-solutions.co.ke"

    let subject = ""
    let html    = ""

    if (type === "contact") {
      subject = `New Contact Form Submission from ${esc(data.name)}`
      html = `
        <h2 style="color:#1a1a2e">New Contact Message</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${esc(data.name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(data.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${esc(data.phone) || "Not provided"}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${esc(data.subject) || "Not provided"}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${esc(data.message)}</td></tr>
        </table>
      `
    } else if (type === "audit") {
      subject = `New Free Audit Request — ${esc(data.companyName || data.contactName)}`
      html = `
        <h2 style="color:#1a1a2e">New Free Audit Request</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Company</strong></td><td>${esc(data.companyName) || "Not provided"}</td></tr>
          <tr><td><strong>Contact</strong></td><td>${esc(data.contactName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(data.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${esc(data.phone) || "Not provided"}</td></tr>
          <tr><td><strong>Industry</strong></td><td>${esc(data.industry) || "Not provided"}</td></tr>
          <tr><td valign="top"><strong>Notes</strong></td><td>${esc(data.auditNotes) || "Not provided"}</td></tr>
        </table>
      `
    } else if (type === "career") {
      subject = `New Career Application from ${esc(data.name)}`
      html = `
        <h2 style="color:#1a1a2e">New Career Application</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${esc(data.name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${esc(data.email)}</td></tr>
          <tr><td><strong>Position</strong></td><td>${esc(data.position) || "Not specified"}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${esc(data.message) || "Not provided"}</td></tr>
        </table>
      `
    } else {
      throw new Error("Invalid submission type")
    }

    const { error } = await resend.emails.send({
      from:     FROM,
      to:       [businessEmail],
      replyTo:  data.email,
      subject,
      html,
    })

    if (error) throw error

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    )
  } catch (err: any) {
    console.error("notify-submission error:", err)
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
    )
  }
})
