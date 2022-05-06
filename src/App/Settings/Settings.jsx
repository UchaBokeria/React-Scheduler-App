import "./Settings.scss";
import { Component } from 'react';

export default class Settings extends Component {
  
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description 1",
          status: "In Progress",
          priority: "Low",
          date: "01/01/2020",
          time: "10:00",
          project: "Project 1",
          color: "",
          labels: [],
          comments: [],
          subtasks: [],
          tags: ["Tag 1", "Tag 2"],
          files: [],
          history: [],
          dateInfo: {
            created: "01/01/2020",
            updated: "01/01/2020",
            createdBy: "User 1",
            updatedBy: "User 1"
          },
          deleteInfo: {
            deleted: false,
            deletedBy: "",
            deletedDate: "",
            deletedReason: ""
          },
          doneInfo: {
            done: false,
            doneBy: "",
            doneDate: "",
            doneReason: "",
            undone: false,
            undoneBy: "",
            undoneDate: "",
            undoneReason: ""
          },
          archiveInfo: {
            archived: false,
            archivedBy: "",
            archivedDate: "",
            archivedReason: "",
            unarchived: false,
            unarchivedBy: "",
            unarchivedDate: "",
            unarchivedReason: ""
          },
          lockInfo: {
            locked: false,
            lockedBy: "",
            lockedDate: "",
            lockedReason: "",
            unlocked: false,
            unlockedBy: "",
            unlockedDate: "",
            unlockedReason: ""
          },
          shareInfo: {
            share: false,
            shareBy: "",
            shareDate: "",
            shareReason: "",
            unshare: false,
            unshareBy: "",
            unshareDate: "",
            unshareReason: ""
          }
        }
      ],
      projects: [],
      labels: [],
    };

  }

  render() {
    return (
        <div className="Settings">
            Settings
        </div>
    );
  }

};