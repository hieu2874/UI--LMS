function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter-block">
                <div className="newsletter-info">
                    <h2 className="newsletter-title">本日ご参加ください</h2>
                    <p className="newsletter-desc">
                        お得な情報や特別なオファーをメールでお届けします。
                    </p>
                </div>
                <div className="newsletter-search">
                    <input type="email" className="newsletter-email" placeholder="メールアドレスを入力" required />
                    <button type="submit" className="button button--primary">join</button>
                </div>
            </div>

        </section>
    )
}
export default Newsletter;