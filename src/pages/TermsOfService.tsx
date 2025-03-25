
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 1, 2023</p>
          
          <div className="prose prose-sm max-w-none">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the BitPredict website or services operated by BitPredict, Inc. ("us", "we", "our").
            </p>
            
            <p className="mt-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p className="mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Use of Service</h2>
            
            <p>
              BitPredict provides Bitcoin price prediction services using machine learning algorithms and historical data analysis. Our predictions are for informational purposes only and should not be considered as financial advice.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Account Registration</h3>
            
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            
            <p className="mt-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Subscriptions and Payments</h2>
            
            <p>
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring basis, depending on the type of subscription plan you select.
            </p>
            
            <p className="mt-4">
              At the end of each billing period, your subscription will automatically renew under the same conditions unless you cancel it or BitPredict cancels it. You may cancel your subscription at any time through your account settings.
            </p>
            
            <p className="mt-4">
              All payments are processed through secure third-party payment processors. BitPredict does not store your complete payment information on our servers.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of BitPredict, Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            
            <p className="mt-4">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of BitPredict, Inc.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
            
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            
            <p className="mt-4">
              BitPredict, Inc., its subsidiaries, affiliates, and licensors do not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>
            
            <p className="mt-4 font-bold">
              BitPredict's price predictions are based on machine learning models and historical data analysis. Cryptocurrency markets are highly volatile, and past performance does not guarantee future results. You should not make investment decisions solely based on our predictions.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            
            <p>
              In no event shall BitPredict, Inc., its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <p className="mt-4">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p className="mt-4">
              BitPredict, Inc.<br />
              123 Blockchain Street<br />
              San Francisco, CA 94103<br />
              support@bitpredict.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
