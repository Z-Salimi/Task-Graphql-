"use client";

import { useQuery } from "@apollo/client";
import { fetchIssuesQuery } from "@/gql/queries/issues";
import { useState } from "react";
import { Modal } from "@/components/modal";
import { ModalEditIssue } from "@/components/madalEditIssue";

export const IssuesListContainer: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<{ issues: Array<Issue> }>(
    fetchIssuesQuery
  );
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const closeModal = () => {
    setShowModal(false);
  };
  
  const closeEditModal = () => setShowEditModal(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col gap-4 border-b-4 pb-8">
          <div className="w-full flex flex-col justify-center items-center">
            <button
              onClick={() => setShowModal(true)}
              className="text-gray-700 font-semibold bg-cyan-300 px-4 py-1 rounded-lg max-w-[50vw] w-full"
            >
              Add Task
            </button>
            {showModal && (
              <Modal refresh={() => refetch()} close={closeModal} />
            )}
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-lg text-gray-700 font-semibold">BACKLOG</h3>
          </div>
          <div className="grid grid-cols-4 text-center bg-slate-200 p-3 rounded-lg">
            <h4 className=" text-gray-700 font-semibold">NAME</h4>
            <h4 className=" text-gray-700 font-semibold">CONTENT</h4>
            <h4 className=" text-gray-700 font-semibold">STATUS</h4>
          </div>
          {(data?.issues || []).map(
            (el, index) =>
              el.status === "BACKLOG" && (
                <div
                  className="grid grid-cols-4 text-center bg-slate-50 p-3 rounded-lg"
                  key={index}
                >
                  <h4>{el.name}</h4>
                  <h4>{el.content}</h4>
                  <h4>{el.status}</h4>
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="text-gray-700 font-semibold bg-yellow-400 px-2 py-1 rounded-lg "
                  >
                    Edit Status
                  </button>
                  {showEditModal && (
                    <ModalEditIssue
                      refresh={() => refetch()}
                      close={closeEditModal}
                      issueId={el.id}
                      currentStatus={el.status}
                    />
                  )}
                </div>
              )
          )}
        </div>

        <div className="flex flex-col gap-4 border-b-4 pb-8">
          <h3 className="text-lg text-gray-700 font-semibold">TODO</h3>
          <div className="grid grid-cols-4 text-center bg-slate-200 p-3 rounded-lg">
            <h4 className=" text-gray-700 font-semibold">NAME</h4>
            <h4 className=" text-gray-700 font-semibold">CONTENT</h4>
            <h4 className=" text-gray-700 font-semibold">STATUS</h4>
          </div>
          {(data?.issues || []).map(
            (el, index) =>
              el.status === "TODO" && (
                <div
                  className="grid grid-cols-4 text-center bg-slate-50 p-3 rounded-lg"
                  key={index}
                >
                  <h4>{el.name}</h4>
                  <h4>{el.content}</h4>
                  <h4>{el.status}</h4>
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="text-gray-700 font-semibold bg-yellow-400 px-2 py-1 rounded-lg "
                  >
                    Edit Status
                  </button>
                  {showEditModal && (
                    <ModalEditIssue
                      refresh={() => refetch()}
                      close={closeEditModal}
                      issueId={el.id}
                      currentStatus={el.status}
                    />
                  )}
                </div>
              )
          )}
        </div>

        <div className="flex flex-col gap-4 border-b-4 pb-8">
          <h3 className="text-lg text-gray-700 font-semibold">INPROGRESS</h3>
          <div className="grid grid-cols-4 text-center bg-slate-200 p-3 rounded-lg">
            <h4 className=" text-gray-700 font-semibold">NAME</h4>
            <h4 className=" text-gray-700 font-semibold">CONTENT</h4>
            <h4 className=" text-gray-700 font-semibold">STATUS</h4>
          </div>
          {(data?.issues || []).map(
            (el, index) =>
              el.status === "INPROGRESS" && (
                <div
                  className="grid grid-cols-4 text-center bg-slate-50 p-3 rounded-lg"
                  key={index}
                >
                  <h4>{el.name}</h4>
                  <h4>{el.content}</h4>
                  <h4>{el.status}</h4>
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="text-gray-700 font-semibold bg-yellow-400 px-2 py-1 rounded-lg "
                  >
                    Edit Status
                  </button>
                  {showEditModal && (
                    <ModalEditIssue
                      refresh={() => refetch()}
                      close={closeEditModal}
                      issueId={el.id}
                      currentStatus={el.status}
                    />
                  )}
                </div>
              )
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg text-gray-700 font-semibold">DONE</h3>
          <div className="grid grid-cols-4 text-center bg-slate-200 p-3 rounded-lg">
            <h4 className=" text-gray-700 font-semibold">NAME</h4>
            <h4 className=" text-gray-700 font-semibold">CONTENT</h4>
            <h4 className=" text-gray-700 font-semibold">STATUS</h4>
          </div>
          {(data?.issues || []).map(
            (el, index) =>
              el.status === "DONE" && (
                <div
                  className="grid grid-cols-4 text-center bg-slate-50 p-3 rounded-lg"
                  key={index}
                >
                  <h4>{el.name}</h4>
                  <h4>{el.content}</h4>
                  <h4>{el.status}</h4>
                  <button
                    onClick={() => setShowEditModal(true)}
                    className="text-gray-700 font-semibold bg-yellow-400 px-2 py-1 rounded-lg "
                  >
                    Edit Status
                  </button>
                  {showEditModal && (
                    <ModalEditIssue
                      refresh={() => refetch()}
                      close={closeEditModal}
                      issueId={el.id}
                      currentStatus={el.status}
                    />
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
