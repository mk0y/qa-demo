import { AspectRatio } from '@/components/ui/aspect-ratio'
import img from '../assets/ai-bot-color.png'
import img2 from '../assets/semsearch.png'

const Widgets = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="text-2xl mb-12">Widgets</div>
      <div className="flex">
        <div className="w-[320px] last:ml-12">
          <div className="text-xl text-left mb-5">Chat Bot</div>
          <div className="w-[320px] shadow-md hover:shadow-xl transition-shadow cursor-pointer">
            <AspectRatio ratio={1} className="flex justify-center items-center">
              <div className="flex flex-1 justify-center items-center p-8">
                <img src={img} />
              </div>
            </AspectRatio>
          </div>
          <p className="text-left mt-4">
            Integrate your docs with external visitors to your website. So that
            they can query information about your business. You may whitelist
            docs which are safe to be queried.
          </p>
        </div>
        <div className="w-[320px] last:ml-12">
          <div className="text-xl text-left mb-5">Semantic Search</div>
          <div className="w-[320px] shadow-md hover:shadow-xl transition-shadow cursor-pointer">
            <AspectRatio ratio={1} className="flex justify-center items-center">
              <div className="flex flex-1 justify-center items-center p-8">
                <img src={img2} />
              </div>
            </AspectRatio>
          </div>
          <p className="text-left mt-4">
            Visitors to your website can perform semantic search over
            whitelisted docs and over your website's content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Widgets
