import type { ReactElement, ReactNode } from "react";

type SaveShellProps = {
  readonly children: ReactNode;
};

export default function SaveShell({ children }: SaveShellProps): ReactElement {
  return <div className="s-article mx-auto w-full max-w-3xl px-6 pb-16 pt-8">{children}</div>;
}
