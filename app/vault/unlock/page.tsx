import { VaultUnlockForm } from "./VaultUnlockForm";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ next?: string }> | { next?: string };
};

export default async function VaultUnlockPage(props: Props) {
  const searchParams = await Promise.resolve(props.searchParams ?? {});
  const next = (searchParams && "next" in searchParams ? searchParams.next : undefined) ?? "/vault-full";

  return <VaultUnlockForm next={next} />;
}
