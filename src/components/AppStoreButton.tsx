"use client";

import React from "react";

export default function AppStoreButton ({ className }: { className?: string }) {
	return (
		<a
			href={"apps.apple.com/app/hypesim/id6746370915"}
			target={"_blank"}>
			<img
				alt={"AppStore"}
				className={className}
				src={"/images/AppStore.svg"}
			/>
		</a>
	);
}