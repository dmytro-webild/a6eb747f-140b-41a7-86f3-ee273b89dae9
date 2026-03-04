"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, Briefcase, CheckCircle, FileCheck, FileText, Globe, Home, MapPin, MessageSquareText, Phone, Scale, Settings, Shield, Star, Users, ArrowLeftRight, CircleDollarSign, Send } from 'lucide-react';

function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Mumbai Law Firm"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Mira Road East"
          bottomRightText="099675 80110"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          background={{ variant: "radial-gradient" }}
          tag="5.0 ★ Rated Legal Services"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Trusted Property, Civil & Criminal Lawyer in Mira Road"
          description="24/7 Legal Support by Advocate Aalaya A. Khan. Expert litigation, property matters, and legal documentation services. Opposite Mira Road Railway Station."
          buttons={[
            { text: "Call Now – 099675 80110", href: "tel:099675 80110" },
            { text: "Book Free Consultation", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          dashboard={{
            title: "Legal Services Hub",            logoIcon: Scale,
            imageSrc: "http://img.b2bpic.net/free-photo/talking-adult-modern-phone-business-vacation_1303-2820.jpg",            imageAlt: "female advocate lawyer professional legal professional woman confident attorney",            searchPlaceholder: "Search legal services...",            sidebarItems: [
              { icon: FileText },
              { icon: Shield, active: true },
              { icon: Phone }
            ],
            buttons: [
              { text: "Schedule Now", href: "#contact" },
              { text: "View Services", href: "#services" }
            ],
            stats: [
              { title: "Google Rating", values: [95, 95, 95], description: "254+ verified reviews" },
              { title: "Experience", values: [8, 8, 8], valueSuffix: "years", description: "Years of legal practice" },
              { title: "Availability", values: [24, 24, 24], valueSuffix: "/7", description: "Open 24 Hours" }
            ],
            chartTitle: "Client Satisfaction",            chartData: [
              { value: 95 },
              { value: 98 },
              { value: 96 },
              { value: 99 },
              { value: 97 }
            ],
            listTitle: "Recent Services",            listItems: [
              { icon: Home, title: "Property Registration", status: "Completed" },
              { icon: FileCheck, title: "Legal Documentation", status: "Completed" },
              { icon: Shield, title: "Criminal Defense", status: "Completed" }
            ]
          }}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="About Advocate Aalaya A. Khan – Leading Legal Expert in Mira Road"
          useInvertedBackground={false}
          metricsAnimation="slide-up"
          metrics={[
            { icon: Award, label: "Established", value: "2021" },
            { icon: CheckCircle, label: "Cases Handled", value: "500+" },
            { icon: Users, label: "Satisfied Clients", value: "1000+" },
            { icon: MapPin, label: "Local Courts", value: "15+" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Legal Services"
          description="Comprehensive legal solutions for property disputes, civil matters, criminal defense, and legal documentation."
          tag="Services Offered"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          features={[
            {
              id: "01",              title: "Property & Registration",              description: "Will registration, power of attorney, release deed, leave & license, gift deed. Expert guidance for all property matters.",              imageSrc: "http://img.b2bpic.net/free-photo/approved-application-credit-real-estate_23-2147764204.jpg?_wi=1",              imageAlt: "property document legal document property agreement real estate contract"
            },
            {
              id: "02",              title: "Civil Litigation",              description: "Property disputes, succession certificate, legal heir certificate. Strong representation in civil courts.",              imageSrc: "http://img.b2bpic.net/free-photo/approved-application-credit-real-estate_23-2147764204.jpg?_wi=2",              imageAlt: "property document legal document property agreement real estate contract"
            },
            {
              id: "03",              title: "Criminal Defense",              description: "Experienced criminal defense advocacy. Dedicated representation for all criminal matters.",              imageSrc: "http://img.b2bpic.net/free-photo/scales-justice-front-courthouse_23-2152001195.jpg",              imageAlt: "justice scales legal justice law and order courthouse"
            },
            {
              id: "04",              title: "Matrimonial Law",              description: "Divorce cases, matrimonial disputes, family law matters. Compassionate legal guidance.",              imageSrc: "http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg?_wi=1",              imageAlt: "law office interior legal office professional office space modern law firm"
            },
            {
              id: "05",              title: "Stamp Duty Consultation",              description: "Expert stamp duty advice, registration assistance, tax optimization strategies.",              imageSrc: "http://img.b2bpic.net/free-photo/approved-application-credit-real-estate_23-2147764204.jpg?_wi=3",              imageAlt: "property document legal document property agreement real estate contract"
            },
            {
              id: "06",              title: "Legal Documentation",              description: "Complete legal documentation support. Proper drafting and execution of all legal instruments.",              imageSrc: "http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg?_wi=2",              imageAlt: "law office interior legal office professional office space modern law firm"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          useInvertedBackground={true}
          buttons={[
            { text: "Consult Now", href: "#contact" }
          ]}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <FeatureCardThree
          title="Why Choose Mumbai Law Firm?"
          description="Proven expertise, transparent communication, and dedicated legal support for your peace of mind."
          tag="Our Advantage"
          tagIcon={Shield}
          tagAnimation="slide-up"
          textboxLayout="default"
          features={[
            {
              id: "01",              title: "5.0 ★ Rated Service",              description: "254+ verified Google reviews. Exceptional client satisfaction and trusted reputation.",              imageSrc: "http://img.b2bpic.net/free-vector/rate-remark-us-5-star-background-business-success-growth_1017-60939.jpg",              imageAlt: "google reviews 5 star rating customer reviews testimonials banner"
            },
            {
              id: "02",              title: "24/7 Availability",              description: "Always available when you need legal support. Open 24 hours for emergencies and consultations.",              imageSrc: "http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg?_wi=3",              imageAlt: "law office interior legal office professional office space modern law firm"
            },
            {
              id: "03",              title: "Prime Location",              description: "Ground Floor, opposite Mira Road Railway Station. Convenient and accessible location.",              imageSrc: "http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg?_wi=4",              imageAlt: "law office interior legal office professional office space modern law firm"
            },
            {
              id: "04",              title: "Transparent Consultation",              description: "Clear communication, no hidden charges. Honest advice focused on your best interests.",              imageSrc: "http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg?_wi=5",              imageAlt: "law office interior legal office professional office space modern law firm"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Client Testimonials"
          description="Real feedback from satisfied clients across property, civil, and criminal matters."
          tag="Google Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Arbaz Khan",              role: "Property Buyer",              company: "Mira Road",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businesswoman-her-employees-background_1262-20305.jpg",              imageAlt: "satisfied client professional portrait business woman confident person"
            },
            {
              id: "2",              name: "Priya Sharma",              role: "Business Owner",              company: "Mira Bhayandar",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",              imageAlt: "business man portrait professional headshot happy client confident male"
            },
            {
              id: "3",              name: "Rajesh Patel",              role: "Property Investor",              company: "Mira Road",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg",              imageAlt: "professional woman business portrait client testimonial satisfied customer"
            },
            {
              id: "4",              name: "Sneha Desai",              role: "Legal Client",              company: "Mira Bhayandar",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",              imageAlt: "professional man business headshot happy client portrait confident businessman"
            }
          ]}
          kpiItems={[
            { value: "254+", label: "Google Reviews" },
            { value: "5.0", label: "Average Rating" },
            { value: "1000+", label: "Satisfied Clients" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Legal Help"
          tagIcon={Phone}
          tagAnimation="slide-up"
          title="Need Legal Assistance Today?"
          description="Speak directly with Advocate Aalaya A. Khan. Free consultation to discuss your legal concerns and find the best solution."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/positive-business-team-discussing-report-sitting-meeting-table-with-monitor-holding-looking-documents-business-meeting-teamwork-concept_74855-11909.jpg?_wi=6"
          imageAlt="law office interior legal office professional office space modern law firm"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Consultation"
          termsText="We respect your privacy. We'll contact you only for legal consultation."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Services",              items: [
                { label: "Property Law", href: "#services" },
                { label: "Civil Litigation", href: "#services" },
                { label: "Criminal Defense", href: "#services" },
                { label: "Matrimonial Law", href: "#services" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Call: 099675 80110", href: "tel:099675 80110" },
                { label: "Email: info@mumbailawfirm.com", href: "mailto:info@mumbailawfirm.com" },
                { label: "WhatsApp", href: "https://wa.me/919967580110" },
                { label: "Office Hours: 24/7", href: "#" }
              ]
            },
            {
              title: "Location",              items: [
                { label: "Ground Floor, Shanti Shopping Centre", href: "#" },
                { label: "Shop No. B-98, Mira Road", href: "#" },
                { label: "Opposite Railway Station (East)", href: "#" },
                { label: "Get Directions", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 Mumbai Law Firm. All rights reserved."
          bottomRightText="Advocate Aalaya A. Khan | Legal Excellence"
        />
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;