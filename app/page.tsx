import Image from "next/image";

const moments = [
  {
    number: "01",
    title: "The peace you bring",
    text: "It does not have to be a deep conversation. Somehow, simply talking to you makes the noise inside me settle and the world feel easier to carry.",
  },
  {
    number: "02",
    title: "The person you helped me become",
    text: "More than one piece of advice, you changed the way I look at myself. Knowing you pushed me to confront my faults, grow beyond them, and become a better person.",
  },
  {
    number: "03",
    title: "Your forgiving heart",
    text: "You found the grace to forgive me after I had given you reasons not to. I will never treat that kindness lightly, nor forget what it taught me about the size of your heart.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Back to the beginning">D</a>
        <span>A small corner of the world, made for Debarati</span>
      </header>

      <section className="hero" id="top">
        <div>
          <p className="eyebrow">For Debarati · From my heart</p>
          <h1>Some people feel<br />like <em>home.</em></h1>
          <p className="intro">
            You are one of those rare people whose presence makes the noise in my mind grow quiet.
            This is not a question, or a request. It is simply an honest expression of everything
            your presence has meant to me.
          </p>
          <a className="textLink" href="#letter">Read my letter <span>↓</span></a>
        </div>
        <figure className="heroPortrait">
          <div className="photoFrame">
            <Image src="/her-portrait.jpeg" alt="Debarati smiling in a black outfit" fill priority sizes="(max-width: 800px) 86vw, 31vw" className="cover" />
          </div>
          <figcaption>That smile—the kind that makes everything around it feel lighter.</figcaption>
        </figure>
      </section>

      <div className="ticker" aria-hidden="true">
        <div><span>FOR DEBARATI</span><i>✦</i><span>WORDS I NEEDED TO SAY</span><i>✦</i><span>FOR DEBARATI</span><i>✦</i><span>WORDS I NEEDED TO SAY</span><i>✦</i></div>
      </div>

      <section className="meaning">
        <div className="sectionNumber">01</div>
        <div><p className="eyebrow">What you mean to me</p><h2>In the little things,<br />you are everywhere.</h2></div>
        <div className="moments">
          {moments.map((moment) => (
            <article className="moment" key={moment.number}>
              <span>{moment.number}</span><h3>{moment.title}</h3><p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interlude">
        <div className="interludePhoto">
          <Image src="/her-blue.jpeg" alt="Debarati in a blue saree, looking into the distance" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover" />
        </div>
        <blockquote><span>“</span>Pocket-sized in height, perhaps—but with a presence vast enough to change an entire room, and my entire world.</blockquote>
      </section>

      <section className="songSection" aria-labelledby="song-title">
        <div className="songIntro">
          <p className="eyebrow">A song that makes me think of you</p>
          <h2 id="song-title">তোর কথা মনে করিয়ে দেয় যে গানটা</h2>
          <p lang="bn">
            গানটার প্রতিটি কথা হয়তো আমাদের গল্পের সঙ্গে মেলে না। তবু এর মধ্যে এমন কিছু
            অনুভূতি আছে, যা শুনলেই আমার তোর কথা মনে পড়ে।
          </p>
        </div>
        <div className="videoWrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/GhQxrCrVSyw?start=32&rel=0"
            title="Until I Found You by Stephen Sanchez"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <a
          className="youtubeLink"
          href="https://www.youtube.com/watch?v=GhQxrCrVSyw"
          target="_blank"
          rel="noreferrer"
        >
          Open on YouTube <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="letterSection" id="letter">
        <div className="letterHeading"><p className="eyebrow">The words I most wanted to say</p><h2>A letter, with<br />an open hand.</h2></div>
        <article
          className="letter"
          lang="bn"
          tabIndex={0}
          aria-label="দেবারতির জন্য চিঠি—সম্পূর্ণ চিঠি পড়তে স্ক্রল কর"
        >
          <p className="salutation">প্রিয় দেবারতি,</p>
          <p>
            অনেকদিন ধরেই কিছু কথা মনের মধ্যে জমে ছিল। কোনো বিশেষ দিনের অপেক্ষায় নয়, কোনো উত্তর
            পাওয়ার আশাতেও নয়—শুধু সত্যি করে কথাগুলো তোকে জানাতে চেয়েছি। তুই অন্যদের জীবনে যে
            আনন্দ এত সহজে ছড়িয়ে দিস, জীবন যেন সেই আনন্দই তোকে বারবার ফিরিয়ে দেয়; আর তোকে
            সবসময় সেই অসম্ভব সুন্দর হাসিটা হাসার কারণ দেয়।
          </p>
          <p>
            তোর সঙ্গে কথা বললেই আমি এমন একটা শান্তি পাই, যেটা আর কোথাও খুঁজে পাই না। কথাটা
            গভীর কিছু হোক বা একেবারে সাধারণ—তোর সঙ্গে কথা বলাটাই আমার মনের সমস্ত কোলাহল
            একটু থামিয়ে দেয়। আমার জীবনের ছোট ছোট ঘটনাগুলো তোকে বলতে ইচ্ছে করে, সবকিছুতে
            তোর মতামত জানতে ইচ্ছে করে। এমন নয় যে আমি নিজে সিদ্ধান্ত নিতে পারি না; আসলে তোকে,
            তোর ভাবনাকে আর তোর বিচারবুদ্ধিকে আমি এতটাই সম্মান করি। তোর শুধু থাকাটুকুই আমার
            জীবনকে একটু শান্ত, একটু উষ্ণ, আর অনেকটা পরিপূর্ণ করে দেয়।
          </p>
          <p>
            আমাদের প্রথম কথাটাও কত সাধারণ ছিল—ড্রয়িং ক্লাসে তোকে একটা ইরেজার দেওয়া নিয়ে।
            তখন কি আর জানতাম, এত ছোট্ট একটা মুহূর্ত থেকেই শুরু হওয়া পরিচয়টা একদিন আমার কাছে
            এতটা মূল্যবান হয়ে উঠবে? আর তোর সেই হাসি—সত্যি বলতে, ওই হাসিটার প্রেমেই আমি প্রথম
            পড়েছিলাম। এখনও তোর হাসি দেখলে চারপাশটা একটু বেশি সুন্দর মনে হয়।
          </p>
          <p>
            আমি জানি, আমাদের গল্পে সুন্দর স্মৃতির পাশাপাশি কষ্টও আছে। আমার অহংকার আর তোর সঙ্গে
            আমার ব্যবহার তোকে এমন কষ্ট দিয়েছিল, যেটা তোর কোনোদিনই প্রাপ্য ছিল না। তুই আমাকে
            ক্ষমা করেছিস—এই কথাটা আমি কৃতজ্ঞতা আর বিনয়ের সঙ্গেই মনে রাখি। সেই ক্ষমা অতীতকে
            মুছে দেয় না, আর তোকে নতুন করে কিছু চাওয়ার অধিকারও আমাকে দেয় না। তুই শুধু আমাকে
            কোনো একটা পরামর্শ দিসনি; তুই আমাকে শিখিয়েছিস, কথা বলার সময় কঠোর না হতে এবং আমি যা
            সত্যি বলে জানি, সেটাই সবসময় অন্যের ওপর প্রতিষ্ঠা করার চেষ্টা না করতে। নিজের ভুলগুলোর
            সামনে সৎভাবে দাঁড়াতে, বদলাতে আর আরও ভালো মানুষ হতে শিখিয়েছিস। আজ আমার মধ্যে যতটুকু ভালো পরিবর্তন
            এসেছে, তার মধ্যে তোর শেখানো অনেকটা আলো মিশে আছে। আর একটা বিষয়ের জন্যও আমি সত্যিই
            দুঃখিত—EE থেকে CSE-তে বিভাগ বদলে চলে যাওয়ার পরে তোর জীবনের দুটো গুরুত্বপূর্ণ বছরে
            আমি পাশে ছিলাম না। পরিস্থিতি আমাদের দূরে নিয়ে গিয়েছিল ঠিকই, কিন্তু তোর সেই সময়টায়
            আমার অনুপস্থিত থাকার আক্ষেপটা আমার থেকেই যাবে। বড় কোনো ঘটনার জন্যই শুধু নয়—তোর সঙ্গে
            সেই একেবারে সাধারণ কথাগুলো বলতে না পারাটাই সবচেয়ে বেশি মিস করেছি।
          </p>
          <p className="relationshipNote">
            <span className="noteLabel">একটা কথা আমি এখন নিশ্চিতভাবে জানি</span>
            তোর জীবনে একজন আছে। তোদের একসঙ্গে কিছু ছবি আমি দেখেছি, তাই কথাটা আর আমার কাছে কোনো
            অনুমান, কানাঘুষো বা শোনা কথা নয়। আমি এটা জানি—আর শুধু চাই, তুইও জানিস যে আমি জানি।
          </p>
          <p>
            আমি তোকে ছেড়ে দিয়ে এগিয়ে গেছি—এমনটা নয়। তোর প্রতি আমার অনুভূতি এখনও আগের মতোই
            সত্যি, আর তোর জীবনে অন্য কেউ আছে জেনেও সেটা হঠাৎ করে মুছে যায়নি। এই চিঠিটা কোনো
            বিদায় নয়। শুধু এতদিন ধরে না-বলা সত্যিটা তোকে জানানো—আমি এখনও তোকে ভালোবাসি।
            কোনোদিন যদি তোরও মনে হয় আমাদের নিয়ে কথা বলা দরকার, আমি সেই কথোপকথন থেকে পিছিয়ে
            যাব না।
          </p>
          <p>
            আমি শুধু চাই তুই জানিস—তুই এখনও আমার কাছে ভীষণ মূল্যবান। তোর জন্য আমার যত্ন কোনো
            বিনিময়ের হিসেব নয়; এর কোনো শর্ত নেই, কোনো উত্তর পাওয়ার দাবিও নেই। কোনোদিন জীবন কঠিন
            হয়ে উঠলে, কোনো চেনা কণ্ঠের দরকার হলে, অথবা শুধু কাউকে নিজের পাশে চাইলে—আমাকে পাবি।
            তোর সীমারেখাকে সম্মান করেই থাকব, বিনিময়ে কিছু না চেয়ে।
          </p>
          <p>
            তুই আমার গোটা পৃথিবী—তার মানে এই নয় যে তোর পৃথিবীতে আমাকে জায়গা দিতেই হবে। বরং
            তোকে চিনেই আমি বুঝেছি, একজন মানুষ আরেকজনের কাছে কতটা গভীরভাবে গুরুত্বপূর্ণ হয়ে উঠতে
            পারে। তুই আমার মনের ভেতরের গোটা মানচিত্রটাই বদলে দিয়েছিস। সেই জন্য আমি সবসময় তোর
            কাছে কৃতজ্ঞ থাকব।
          </p>
          <p>
            সব মিলিয়ে তোকে চিনি সাত বছর হয়ে গেল। তবু মনে হয়, তোর মধ্যে জানার মতো এখনও কত কিছু
            বাকি। কোনো অধিকার থেকে নয়, শুধু মনের একটা ইচ্ছে থেকে বলছি—আগামী সত্তর বছরও, তুই যতটুকু
            জায়গা দিতে স্বচ্ছন্দ বোধ করিস, ততটুকু জায়গা থেকেই তোকে চিনে যেতে চাই।
          </p>
          <p className="noReply">এই লেখাটার উত্তর তোকে দিতেই হবে—এমন কোনো প্রত্যাশা আমার নেই। তোর কাছে কিছু চাওয়ার জন্যও এটা লেখা নয়। শুধু আমার মনের কথাগুলো তোর কাছে রেখে যেতে চেয়েছিলাম।</p>
          <p className="closing">ভালো থাকিস, দেবারতি।</p>
          <p className="signature">সবসময় তোর ভালো চাইব।</p>
        </article>
      </section>

      <section className="wish">
        <div>
          <p className="eyebrow">What I will always wish for you</p>
          <h2>May you always choose<br />the life that chooses you.</h2>
          <p className="wishText">May it be full of soft mornings, brave decisions, loud laughter, people who honour your heart, and a thousand reasons to feel proud of the person you are becoming.</p>
        </div>
        <figure className="wishPhoto">
          <Image src="/her-silver.jpeg" alt="Debarati smiling in a silver saree" fill sizes="(max-width: 800px) 88vw, 36vw" className="cover" />
          <figcaption>Quietly herself—and effortlessly unforgettable.</figcaption>
        </figure>
      </section>

      <footer><p>Made with a full heart, for Debarati.</p><p>Some words deserve to be said honestly.</p></footer>
    </main>
  );
}
