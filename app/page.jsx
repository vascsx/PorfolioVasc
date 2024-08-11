import {Button} from "@/components/ui/button";
import Social from "@/components/ui/Social";
import {FiDownload} from "react-icons/fi";
const Home = () => {
  return (
      <section>
        <div className="container mx-auto h-full">
          <div className ="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center xl:text-left">
                <span className="text-xl">Quality Assurance</span>
                <h1 className="h1 mb-6 ">Hello I'm <br/> <span className="text-cyan-400">Anderson Vasconcelos</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">I have extensive experience as a Quality Analyst, 
                  where I have honed my skills in ensuring the highest standards of software performance and reliability
                  </p>

                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Button 
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2">
                      Download CV
                      <FiDownload className="text-xl"/>
                    </Button>
                    <div className="mb-8 xl:mb-0">
                      <Social/>
                    </div>
                  </div>
              </div>
              <div>photo</div>
          </div>
        </div>
      </section>

      
  )
}

export default Home