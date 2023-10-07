import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FeatureSectionTwo() {
	return (
		<div className="section bg-warning-400 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h2>Ready for the bull run?</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Influencers Association</h4>
								<p>
								Connect directly with the 2024BULLRUN Influencers Association of 20 members! Reach hundreds of thousands of genuine web3 audiences in days!
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Web3 IRL Events</h4>
								<p>
								Thinking of organizing and sharing cool crypto IRL event videos online? 
Complete web3 event management taken care of by 2024BULLRUN,

for you.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>PR & Media Comms</h4>
								<p>
								One-stop shop for all your project's PR needs. 2024BULLRUN can write your articles to publish them on all major WEB3 media houses.
								</p>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
