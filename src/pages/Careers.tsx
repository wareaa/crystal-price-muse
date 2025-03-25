
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPositions = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote OK)",
      description: "We're looking for an experienced ML engineer to join our prediction models team. You'll work on improving our core Bitcoin price prediction algorithms and developing new features."
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      description: "Join our frontend team to build intuitive, responsive interfaces for our Bitcoin prediction platform. Experience with React and data visualization is required."
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "New York, NY (Remote OK)",
      description: "Help us extract insights from vast amounts of cryptocurrency market data and develop new prediction models. Strong background in statistics and machine learning required."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      description: "Drive the vision and roadmap for our Bitcoin prediction products. You'll work closely with engineering, data science, and design teams to deliver value to our users."
    },
    {
      title: "Growth Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      description: "Design and execute marketing strategies to grow our user base. Experience in crypto or fintech marketing is a plus."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50 mb-4">
              <p className="text-xs font-medium">Join Our Team</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Careers at BitPredict
            </h1>
            <p className="text-muted-foreground text-lg">
              Help us build the future of Bitcoin price prediction and cryptocurrency analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="bg-secondary/30 rounded-lg h-80 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-bitcoin flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-3xl">₿</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Work on cutting-edge technology</h3>
                    <p className="text-muted-foreground">Apply machine learning and AI to solve complex prediction problems in the cryptocurrency space.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Flexible work environment</h3>
                    <p className="text-muted-foreground">We offer remote-friendly policies and focus on results rather than hours worked.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Competitive compensation</h3>
                    <p className="text-muted-foreground">We offer competitive salaries, equity, and the opportunity to earn Bitcoin bonuses.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Impactful work</h3>
                    <p className="text-muted-foreground">Your contributions will directly help thousands of investors make better decisions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-secondary text-xs px-2 py-1 rounded">{position.department}</span>
                        <span className="bg-secondary text-xs px-2 py-1 rounded">{position.location}</span>
                      </div>
                    </div>
                    <Button className="mt-2 sm:mt-0">Apply Now</Button>
                  </div>
                  <p className="text-muted-foreground">{position.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <h3 className="text-xl font-bold mb-4">Don't see a position that fits?</h3>
              <p className="text-muted-foreground mb-6">We're always looking for talented individuals to join our team.</p>
              <Button variant="outline" size="lg">Send Us Your Resume</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
