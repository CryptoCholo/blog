import Article from "./article"
import Trending from "./trending"


function Main() {
 
    return (
      <div className="flex w-full h-max px-15 pt-10 font-serif bg-slate-100">
        <div className=" flex flex-wrap h-max w-4/5 gap-y-10 gap-x-5">
          <Article title="The Ultimate Guide to Sustainable Living"/>
          <Article title="Why Every Business Should Embrace Diversity and Inclusion"/>
          <Article title="Understanding Cryptocurrency: A Beginner's Guide"/>
          <Article title="How to Grow Your Own Organic Garden in a Small Space"/>
          <Article title="Tips and Tricks for Mastering Your Public Speaking Skills"/>
          <Article title="The Future of AI and Its Impact on Society"/>
          <Article title="Breaking Down the Myths and Facts About Nutrition"/>
          <Article title="The Importance of Financial Planning for Young Adults"/>
          <Article title="How to Grow Your Own Organic Garden in a Small Space"/>
          <Article title="Exploring the Future of Virtual Reality Technology"/>
          <Article title="What You Need to Know About the Rise of NFTs"/>
          <Article title="The Benefits of Mindful Meditation for Stress Reduction"/>
          <Article title="How to Enhance Your Productivity and Get More Done Every Day"/>
          <Article title="The Power of Positive Thinking: Transform Your Life Today"/>
        </div>
        <div className="flex flex-col gap-15 w-1/5 ">
          <Trending subheading="Breaking News"/>
          <Trending subheading="Trending"/>
          <Trending subheading="Recommended"/>
        </div>
      </div>
    )
  }
  
export default Main
  