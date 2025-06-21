import { Metadata } from "next";

type Params = Promise<{ id: string }>;
export const metadata: Metadata = {
	other: {
		"apple-itunes-app": "app-id=id6746370915, app-clip-bundle-id=business.xxi.hypesim.Clip"
	}
}

export default async function Page ({ params }: { params: Params }) {
	return <h1>Virtual Line {(await params).id}</h1>
}
