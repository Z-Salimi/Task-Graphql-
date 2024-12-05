type IssueStatue = "BACKLOG" | "TODO" | "INPROGRESS" | "DONE";

interface Issue {
  id: string;
  name: string;
  userId: string;
  content: string;
  status: IssueStatue;
  createdAt?: string;
  user?: IUser;
}
interface ICreateIssueDto {
  CreateIssue: {
    createdAt: string;
  };
}
interface ICreateIssue{
  name : string;
  content : string;
  status: string;
}
interface IEditStatusIssue{
  id: string;
  status: string;
}
