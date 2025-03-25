
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CEO",
      bio: "Former quantitative analyst with 10+ years experience in financial forecasting and machine learning.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CTO",
      bio: "AI researcher with a PhD in Machine Learning from MIT and 15+ years experience in predictive modeling.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "David Patel",
      role: "Lead Data Scientist",
      bio: "Former lead data scientist at a major hedge fund with expertise in cryptocurrency markets.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product leader with experience at fintech startups and a passion for user-centered design.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50 mb-4">
              <p className="text-xs font-medium">Our Story</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About BitPredict
            </h1>
            <p className="text-muted-foreground text-lg">
              We're building the future of Bitcoin price prediction through advanced machine learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                Founded in 2021, BitPredict was born from a simple observation: despite the proliferation of Bitcoin analysis tools, most predictions were still based on subjective technical analysis rather than data science.
              </p>
              <p className="text-lg mb-6">
                Our mission is to democratize access to sophisticated Bitcoin price prediction technology, empowering investors of all sizes to make more informed decisions.
              </p>
              <p className="text-lg">
                By applying cutting-edge machine learning techniques to vast amounts of market data, we've created prediction models that consistently outperform traditional methods.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg h-80 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-bitcoin flex items-center justify-center rotate-12 transform hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-3xl">₿</span>
              </div>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-bitcoin/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Data Collection</h3>
                <p>We aggregate data from over 20 exchanges, on-chain metrics, social media sentiment, and macroeconomic indicators.</p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-bitcoin/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Model Training</h3>
                <p>Our ensemble of neural networks and statistical models are continuously trained on historical data and real-time market conditions.</p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-bitcoin/20 flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Prediction Generation</h3>
                <p>We generate predictions with confidence intervals and continuously evaluate and refine our models based on actual outcomes.</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-16" />
          
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-bitcoin mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
