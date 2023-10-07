import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ContentWithPhotoSection() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2 z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-apps-thumb" id="rotatetwo">
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/mocup1.png"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Are You Ready For The 2024 Bull Run?</h2>
							<p>
							Get ready for the 2024 crypto bull run with our expert marketing team! Boost your project's visibility globally through Influencer Marketing, PR, Media, and Web3 IRL Events.
							</p>
							<p>
							Count on us for PR & Media support - from crafting articles to swift publication on your preferred web3 media outle
							</p>
							<div className="fugu-btn-wrap">
								<Link href={"contact"} legacyBehavior>
									<a className="fugu-btn">Get Started</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu-shape3">
				<img src="/images/shape/shape2.png" alt="" />
			</div>
		</div>
	);
}
