export interface ILoginModalProps {
  display: boolean;
  username: string;
  url: string;
  setVisibility?: (value: boolean) => void;
  onClickConfirm?: (username?: string, url?: string) => void;
  onClickCancel?: (username?: string, url?: string) => void;
}
