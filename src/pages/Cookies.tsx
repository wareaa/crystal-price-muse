
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 1, 2023</p>
          
          <div className="prose prose-sm max-w-none">
            <p>
              This Cookie Policy explains how BitPredict, Inc. ("BitPredict", "we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies?</h2>
            
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            
            <p className="mt-4">
              Cookies set by the website owner (in this case, BitPredict) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why do we use cookies?</h2>
            
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">The specific types of cookies served through our website and the purposes they perform:</h3>
            
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                <span className="font-semibold">Essential cookies:</span> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
              </li>
              <li>
                <span className="font-semibold">Performance and functionality cookies:</span> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </li>
              <li>
                <span className="font-semibold">Analytics cookies:</span> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
              </li>
              <li>
                <span className="font-semibold">Targeting cookies:</span> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
              </li>
            </ul>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How can you control cookies?</h2>
            
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            
            <p className="mt-4">
              In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-blue-600 hover:underline">http://www.youronlinechoices.com</a>.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">How to delete cookies?</h3>
            
            <p>
              You can delete cookies already stored on your computer:
            </p>
            
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>In Chrome: Settings → Privacy and security → Cookies and other site data → See all cookies and site data</li>
              <li>In Firefox: Options → Privacy & Security → Cookies and Site Data → Manage Data</li>
              <li>In Safari: Preferences → Privacy → Manage Website Data</li>
              <li>In Edge: Settings → Cookies and site permissions → Manage and delete cookies and site data → See all cookies and site data</li>
            </ul>
            
            <p className="mt-4">
              Doing this may limit the functionality of our website.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Updates to this Cookie Policy</h2>
            
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <p className="mt-4">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <Separator className="my-8" />
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            
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

export default Cookies;
