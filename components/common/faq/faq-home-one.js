/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function FaqHomeOne() {
	return (
		<div className="section bg-warning-300 fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content large-content">
							<h2>Frequently asked questions</h2>
							<p>
								Frequently asked questions about our crypto currency app. The crypto security for
								conducting trusted transactions.
							</p>

							<Link href={"/contact"} legacyBehavior>
								<a className="fugu-faq-btn">Don't find the answer? Contact us here</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-5 offset-lg-2">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4>How do you leverage influencers and IRL events for Web3 marketing campaigns?</h4>
								<p>
								We collaborate with people from all across Web3 space, carefully selecting those who align with our clients' projects. By leveraging their reach & credibility, we create powerful Web3 marketing campaigns that effectively engage and expand the target audience. 
Our influencer & IRL partnerships help us to stay at the forefront of the rapidly evolving blockchain landscape in India & beyond.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>What makes your PR facilities stand out and how do they support Web3 projects?</h4>
								<p>
								Our PR facilities are second to none, ensuring Web3 projects receive extensive media coverage across relevant industry channels. 
								We craft press releases, arrange media interviews, and facilitate leadership opportunities to boost the visibility of our clients. 
								With a proactive and results-driven approach, we help you get the best value for your time & money.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>What sets your team apart from other Web3 marketing firms in the industry?</h4>
								<p>
								What truly sets us apart is our team's expertise in Web3 marketing. With a proven track record of executing successful campaigns for various Web3 projects, we have an in-depth understanding of this niche space. 


We are not just marketers; we are passionate advocates of blockchain innovation and decentralization, striving to make a meaningful impact in the Web3 revolution!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
