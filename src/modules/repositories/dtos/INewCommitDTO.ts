export interface INewCommitDTO {
  head_commit: {
    added: string[];
  };
  repository: {
    name: string;
    html_url: string;
  };
}
