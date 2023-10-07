/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionTwo() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="section bg-warning-400 fugu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-1 order-lg-2">
						<div className="fugu-video-thumb wow fadeInUpX" data-wow-delay=".20s">
							<img src="/images/all-img/video-thumb.png" alt="" />
							<div className="fugu-popup">
								<img src="/images/all-img/video-btn.png" alt="" />
								<div className="fugu-play-btn" onClick={() => setOpen(true)}>
									<img src="/images/all-img/play-btn.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Discover how we are not a regular Web3 Marketing Agency:</h2>
							<div className="fugu-icon-list">
								<ul>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Our 20-member Influencers' Association has organic reach on social platforms like Twitter, Telegram, YouTube, Instagram, and more.
									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										We have partnered with 100s of web3 event organizers which allows us to deliver to you a custom web3 IRL event within weeks - you have to sit back and watch things unroll.

									</li>
									<li>
										<img src="/images/svg/check1.svg" alt="" />
										Count on us for PR & Media support - from crafting articles to swift
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
