import { useEffect, useState } from "react";
import { useLmsContext } from "./LmsContext";

function Banner() {
  const {query , setQuery} = useLmsContext();
  const [inputValue, setInputValue] = useState(query || "");

  useEffect(() => {
    setInputValue(query || "");
  }, [query]);

  const handleSearch = () => {
    const trimmed = inputValue.trim();
    if (trimmed === (query || "").trim()) return;
    setQuery(trimmed);
  }
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="text"
              className="banner-input"
              placeholder="コース、講師、団体を検索…"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="button button--primary input-search ">検索</button>
          </form>
        </div>
      </div>
      <div className="banner-image">
        <img src="/image/Group 1000004723.png" alt="banner" />
      </div>
    </section>
  );
}

export default Banner;
