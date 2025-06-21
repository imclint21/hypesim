const BASE_URL = "https://api.hypesim.io";

export async function getVirtualLine (id: string) {
	const res = await fetch(`${BASE_URL}/virtual-lines/${id}/share`);
	if (!res.ok) {
		throw new Error("Failed to fetch virtual line");
	}
	return res.json();
}