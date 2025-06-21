import { ImageResponse } from "next/og"
import { getVirtualLine } from "@/app/lib";

function getVirtualLineTitle (virtualLine: any): string {
	const emoji = virtualLine.location.locationCode
		.toUpperCase()
		.replace(/./g, (char: string) => String.fromCodePoint(127397 + char.charCodeAt(0)));
	return `${emoji} ${virtualLine.plan.name}`
}

export default async function Image ({ params }: { params: { id: string } }) {
	const virtualLine = await getVirtualLine(params.id);
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "white",
				}}>
				<div style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					filter: "blur(5px)",
					backgroundImage: `url(${virtualLine.location.cover})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}/>
				<div style={{
					fontWeight: 700
				}} tw={"flex bg-white/70 rounded-lg px-10 py-6 text-6xl font-semibold justify-center items-center"}>
					{getVirtualLineTitle(virtualLine)}
				</div>
			</div>
		),
		{
			width: 1080,
			height: 720,
		},
	);
}