import { Metadata } from "next";

type Props = {
	params: { id: string }
}

export const metadata: Metadata = {
	other: {
		"apple-itunes-app": "app-id=id6746370915, app-clip-bundle-id=business.xxi.hypesim.Clip"
	}
}

// export async function generateMetadata ({ params }: Props): Promise<Metadata> {
// 	const id = params.id
// 	const virtualLine = await getVirtualLine(id);
//
// 	return {
// 		title: virtualLine.plan.name,
// 		// openGraph: {
// 		// 	images: [post.location.cover]
// 		// },
// 		other: {
// 			"apple-itunes-app": "app-id=id6746370915, app-clip-bundle-id=business.xxi.hypesim.Clip"
// 		}
// 	}
// }

export default function Page ({ params }: { params: { id: string } }) {
	return <h1>Virtual Line {params.id}</h1>
}
