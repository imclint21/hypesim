import { Metadata, ResolvingMetadata } from "next";
import { getVirtualLine } from "@/app/lib";

const BASE_URL = "https://localhost:7001";

type Props = {
	params: Promise<{ id: string }>
}

export async function generateMetadata (
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = (await params).id
	const virtualLine = await getVirtualLine(id);

	return {
		title: virtualLine.plan.name,
		// openGraph: {
		// 	images: [post.location.cover]
		// },
		other: {
			"apple-itunes-app": "app-id=id6746370915, app-clip-bundle-id=business.xxi.hypesim.Clip"
		}
	}
}

export default function Page ({ params }: { params: { id: string } }) {
	return <h1>Virtual Line {params.id}</h1>
}
