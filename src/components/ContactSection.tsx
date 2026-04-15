import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Get a quote for your upcoming project
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Phone className="text-accent-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Phone</h4>
                <a href="tel:+14166028070" className="text-muted-foreground hover:text-accent transition-colors">
                  +1 (416) 602-8070
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Mail className="text-accent-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Email</h4>
                <a href="mailto:info@acegardensuite.com" className="text-muted-foreground hover:text-accent transition-colors">
                  info@acegardensuite.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin className="text-accent-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-lg space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-secondary border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-secondary border-border"
            />
            <Input
              type="tel"
              placeholder="Your Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-secondary border-border"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="bg-secondary border-border"
            />
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
