import BackButton from "@/components/share/back-button";
export default function AiChatBotsInHealthCare() {
  return (
    <>
      <div className="container flex max-w-full flex-col items-start gap-[33px] pb-[60px] pt-[142px] text-white md:gap-[50px] xl:gap-[66px] xl:pb-[100px]">
        <BackButton label="Blogs" />
        <div className="flex flex-col gap-[21px] md:gap-[34px]">
          <div className="text-xl font-medium leading-[32px] md:text-[28px] md:leading-[46px]">
            How AI Chatbot Helps business to Grow?
          </div>

          <div className="text-sm font-normal md:text-base">
            In today’s digital world, customers want quick answers, fast
            service, and smooth communication. This is where AI chatbots come
            in. These smart tools are helping businesses grow faster by
            improving customer service, saving time, and increasing sales.
          </div>
        </div>

        {/* <div className="relative h-[597px] w-[1061px]">
          <Image
            src={"/blogs/blog-1.png"}
            className="rounded-[4px] object-cover"
            alt="ai-chatbots healthcare image"
            fill
            priority
          />
        </div> */}

        <div className="flex flex-col gap-[41px] xl:gap-[61px]">
          <div className="text-base font-bold md:text-xl">
            Let’s look at how AI chatbots can help your business grow.
          </div>

          <ul className="flex list-decimal flex-col gap-[30px] pl-[15px] text-sm md:gap-[45px] md:text-base xl:gap-[61px]">
            <li className="font-bold">
              Available 24/7 for Your Customers:
              <p className="font-normal">
                AI chatbots never sleep. They are always ready to answer
                customer questions—day or night. Whether it’s asking about a
                product, checking an order, or solving a problem, a chatbot can
                help instantly.
                <br />
                <br />
                Why it matters: Your customers get quick support anytime,
                leading to better satisfaction and trust in your brand.
              </p>
            </li>
            <li className="font-bold">
              Helps You Get More Leads
              <p className="font-normal">
                AI chatbots can chat with website visitors, ask questions, and
                collect contact details. They help identify potential customers
                and pass their information to your sales team.
                <br />
                <br />
                Why it matters: You get more leads without spending extra time
                or money.
              </p>
            </li>
            <li className="font-bold">
              Saves Time and Reduces Costs:
              <p className="font-normal">
                Chatbots can handle many customers at once, answering common
                questions and doing simple tasks. This means your team can focus
                on more important work.
                <br />
                <br />
                Why it matters: You save money on support costs and work more
                efficiently.
              </p>
            </li>
            <li className="font-bold">
              Personalized Experience for Every Customer:
              <p className="font-normal">
                Modern chatbots can understand what a customer likes or needs
                and give smart, personalized replies. For example, they can
                recommend the right product or service based on past behavior.
                <br />
                <br />
                Why it matters: Happy customers are more likely to buy and come
                back again.
              </p>
            </li>
            <li className="font-bold">
              Supports Multiple Languages and Platforms:
              <p className="font-normal">
                AI chatbots can speak different languages and work on websites,
                WhatsApp, Facebook, and other platforms. You can reach your
                customers wherever they are.
                <br />
                <br />
                Why it matters: You can serve global customers and improve your
                reach.
              </p>
            </li>
          </ul>

          <div className="text-sm font-normal md:text-base">
            AI chatbots are more than just a support tool—they’re a smart way to
            grow your business. They help improve customer service, generate
            leads, save time, and scale easily.
            <br />
            <br />
            If you want to stay ahead in today’s competitive market, it’s time
            to use AI chatbots in your business.
          </div>

          <div className="text-sm font-normal md:text-base">
            Looking to add an AI chatbot to your website or app?
            <br />
            At Avidion Softwares, we create custom chatbot solutions for
            businesses of all sizes. Let’s build one that fits your goals and
            helps you grow faster.
          </div>
        </div>
      </div>
    </>
  );
}
