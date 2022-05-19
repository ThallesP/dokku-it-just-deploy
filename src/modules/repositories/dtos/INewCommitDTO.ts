export interface INewCommitDTO {
  ref: string;
  head_commit: {
    added: string[];
  };
  repository: {
    name: string;
    html_url: string;
  };
}
