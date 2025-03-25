
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 1, 2023</p>
          
          <div className="prose prose-sm max-w-none">
            <p>
              At BitPredict, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our Bitcoin prediction services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Personal Data</h3>
            <p>When you register for an account, we collect:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Email address</li>
              <li>Name</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Account preferences</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Usage Data</h3>
            <p>We may also collect information on how you use our service, including:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time and date of your visit</li>
              <li>Features used</li>
              <li>Click patterns</li>
            </ul>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including to:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates or security alerts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">By Law or to Protect Rights</h3>
            <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Third-Party Service Providers</h3>
            <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Marketing Communications</h3>
            <p>With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.</p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p className="mt-4">
              BitPredict, Inc.<br />
              123 Blockchain Street<br />
              San Francisco, CA 94103<br />
              privacy@bitpredict.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
