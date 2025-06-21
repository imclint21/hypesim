import { Metadata } from "next";
import { getVirtualLine } from "@/app/lib";

type Params = Promise<{ id: string }>;

type Props = {
	params: Promise<{ id: string }>
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
	const id = (await params).id
	const virtualLine = await getVirtualLine(id);
	return {
		title: virtualLine.plan.name,
		other: {
			"apple-itunes-app": "app-id=id6746370915, app-clip-bundle-id=business.xxi.hypesim.Clip",
			"theme-color": "#FF6214"
		}
	}
}

export default async function Page ({ params }: { params: Params }) {
	return <h1>Virtual Line {(await params).id}</h1>
}
