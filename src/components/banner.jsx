function Banner({query, setQuery}) {
  return (
    <section className="banner">
      <div className="banner-info">
        <h2 className="banner-heading">
          <span>学びと教えることの</span> <span>喜び...</span>
        </h2>
        <p className="banner-desc">
          UT LMSは、講師がビデオコース、ライブクラス、テキスト<br />コースを作成・公開して収益を得られるようにし、学生が最も <br />簡単な方法で学習できるよう支援する、充実した教育プラッ <br />トフォームです。
        </p>
        <div className="banner-search">
          <input 
          type="text" 
          className="banner-input" 
          placeholder="コース、講師、団体を検索…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
           />
          <button className="button button--primary ">検索</button>
        </div>
      </div>
      <div className="banner-image">
        <img src="/image/Group 1000004723.png" alt="banner" />
      </div>
    </section>
  );
}

export default Banner;
