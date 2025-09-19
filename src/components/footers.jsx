function Footers() {
    return (
        <section className="footers">
            <div className="footers-block">
                <div className="footers-box">
                    <a className="footers-logo">
                        <img src="./image/logo.png" alt="" />
                    </a>
                    <ul className="footers-links">
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">会社概要</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">ニュースセンタ</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">採用情報</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">ビジョン</a>
                        </li>
                    </ul>
                </div>
                <div className="footers-box">
                    <h3 className="footers-title">特徴</h3>
                    <ul className="footers-links">
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">いつでもどこでも学習可能</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">自分のペースで学べる</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">豊富な教材とコンテンツ</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">録画された授業の視聴</a>
                        </li>
                        <li className="footers-link-item">
                            <a href="#" className="footers-link">インタラクティブな学習体験</a>
                        </li>
                    </ul>
                </div>
                <div className="footers-box">
                    <h3 className="footers-title">フォローしてください</h3>
                    <div className="footers-social">
                        <a href="#" className="footers-social-link">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="footers-social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="footers-social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footers-bottom">
                    <div className="footers-bottom-left">
                        <a className="footers-bottom-logo">
                            <img src="./image/logo.png" alt="" />
                        </a>
                        <h3 className="footers-bottom-title">学習管理システムプラットフォームに関するすべての権利を留保します。</h3>
                    </div>
                    <div className="footers-bottom-right">
                        <span>
                            <img src="./image/icon4.png" className="footers-bottom-icon" alt="phone" class="icon" />
                            098765432112
                        </span>
                        <span>
                            <img src="./image/icon3.png" className="footers-bottom-icon" alt="email" class="icon" />
                            info@gmail.com
                        </span>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default Footers;