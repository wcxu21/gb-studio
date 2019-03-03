import * as types from "./actionTypes";
import loadProjectData from "../lib/project/loadProjectData";
import saveProjectData from "../lib/project/saveProjectData";
import fs from "fs-extra";
import uuid from "uuid/v4";
import { remote } from "electron";
import buildProject from "../lib/compiler/buildProject";

const asyncAction = async (
  dispatch,
  requestType,
  successType,
  failureType,
  fn
) => {
  dispatch({ type: requestType });
  try {
    const res = await fn();
    dispatch({ ...res, type: successType });
  } catch (e) {
    console.log(e);
    dispatch({ type: failureType });
  }
};

export const loadProject = path => async dispatch => {
  return asyncAction(
    dispatch,
    types.PROJECT_LOAD_REQUEST,
    types.PROJECT_LOAD_SUCCESS,
    types.PROJECT_LOAD_FAILURE,
    async () => {
      const data = await loadProjectData(path, { loadSprite, loadBackground });
      return {
        data,
        path
      };
    }
  );
};

export const loadSprite = filename => async dispatch => {
  return asyncAction(
    dispatch,
    types.SPRITE_LOAD_REQUEST,
    types.SPRITE_LOAD_SUCCESS,
    types.SPRITE_LOAD_FAILURE,
    async () => {
      console.log("LOAD SPRITE: " + filename);
    }
  );
};

export const removeSprite = filename => {
  console.log("REMOVE SPRITE");
  return {
    type: types.SPRITE_REMOVE
  };
};

export const loadBackground = filename => async dispatch => {
  return asyncAction(
    dispatch,
    types.BACKGROUND_LOAD_REQUEST,
    types.BACKGROUND_LOAD_SUCCESS,
    types.BACKGROUND_LOAD_FAILURE,
    async () => {
      console.log("LOAD BACKGROUND: " + filename);
    }
  );
};

export const removeBackground = filename => {
  console.log("REMOVE BACKGROUND");
  return {
    type: types.BACKGROUND_REMOVE
  };
};

export const saveProject = () => async (dispatch, getState) => {
  return asyncAction(
    dispatch,
    types.PROJECT_SAVE_REQUEST,
    types.PROJECT_SAVE_SUCCESS,
    types.PROJECT_SAVE_FAILURE,
    async () => {
      const state = getState();
      await saveProjectData(state.document.path, {
        ...state.project.present,
        settings: {
          ...state.project.present.settings,
          zoom: state.editor.zoom
        }
      });
    }
  );
};

export const setTool = tool => {
  return { type: types.SET_TOOL, tool };
};

export const setSection = section => {
  return { type: types.SET_SECTION, section };
};

export const setNavigationId = id => {
  return { type: types.SET_NAVIGATION_ID, id };
};

export const addScene = (x, y) => {
  return { type: types.ADD_SCENE, id: uuid(), x, y };
};

export const selectScene = sceneId => {
  return { type: types.SELECT_SCENE, sceneId };
};

export const moveScene = (sceneId, moveX, moveY) => {
  return { type: types.MOVE_SCENE, sceneId, moveX, moveY };
};

export const dragScene = (moveX, moveY) => {
  return { type: types.DRAG_SCENE, moveX, moveY };
};

export const dragSceneStart = () => {
  return { type: types.DRAG_SCENE_START };
};

export const dragSceneStop = () => {
  return { type: types.DRAG_SCENE_STOP };
};

export const editScene = (sceneId, values) => {
  return { type: types.EDIT_SCENE, sceneId, values };
};

export const removeScene = sceneId => {
  return { type: types.REMOVE_SCENE, sceneId };
};

export const addActor = (sceneId, x, y) => {
  return { type: types.ADD_ACTOR, id: uuid(), sceneId, x, y };
};

export const moveActor = (sceneId, index, moveX, moveY) => {
  return { type: types.MOVE_ACTOR, sceneId, index, moveX, moveY };
};

export const selectActor = (sceneId, index) => {
  return { type: types.SELECT_ACTOR, sceneId, index };
};

export const removeActor = (sceneId, index) => {
  return { type: types.REMOVE_ACTOR, sceneId, index };
};

export const removeActorAt = (sceneId, x, y) => {
  return { type: types.REMOVE_ACTOR_AT, sceneId, x, y };
};

export const editActor = (sceneId, index, values) => {
  return { type: types.EDIT_ACTOR, sceneId, index, values };
};

export const addCollisionTile = (sceneId, x, y) => {
  return { type: types.ADD_COLLISION_TILE, sceneId, x, y };
};

export const removeCollisionTile = (sceneId, x, y) => {
  return { type: types.REMOVE_COLLISION_TILE, sceneId, x, y };
};

export const addTrigger = (sceneId, x, y) => {
  return { type: types.ADD_TRIGGER, sceneId, x, y };
};

export const removeTrigger = (sceneId, index) => {
  return { type: types.REMOVE_TRIGGER, sceneId, index };
};

export const removeTriggerAt = (sceneId, x, y) => {
  return { type: types.REMOVE_TRIGGER_AT, sceneId, x, y };
};

export const resizeTrigger = (sceneId, index, startX, startY, x, y) => {
  return { type: types.RESIZE_TRIGGER, sceneId, index, startX, startY, x, y };
};

export const moveTrigger = (sceneId, index, moveX, moveY) => {
  return { type: types.MOVE_TRIGGER, sceneId, index, moveX, moveY };
};

export const editTrigger = (sceneId, index, values) => {
  return { type: types.EDIT_TRIGGER, sceneId, index, values };
};

export const selectTrigger = (sceneId, index) => {
  return { type: types.SELECT_TRIGGER, sceneId, index };
};

export const renameFlag = (flagId, name) => {
  return { type: types.RENAME_FLAG, flagId, name };
};

export const setStatus = status => {
  return { type: types.SET_STATUS, status };
};

export const selectWorld = () => {
  return { type: types.SELECT_WORLD };
};

export const editWorld = values => {
  return { type: types.EDIT_WORLD, values };
};

export const editProject = values => {
  return { type: types.EDIT_PROJECT, values };
};

export const editProjectSettings = values => {
  return { type: types.EDIT_PROJECT_SETTINGS, values };
};

export const zoomIn = () => {
  return { type: types.ZOOM_IN };
};

export const zoomOut = () => {
  return { type: types.ZOOM_OUT };
};

export const zoomReset = () => {
  return { type: types.ZOOM_RESET };
};

export const consoleClear = () => {
  return { type: types.CMD_CLEAR };
};

export const runBuild = ({
  buildType = "web",
  exportBuild = false,
  ejectBuild = false
} = {}) => async (dispatch, getState) => {
  dispatch({ type: types.CMD_START });
  dispatch({ type: types.SET_SECTION, section: "build" });
  try {
    const state = getState();
    const projectRoot = state.document && state.document.root;
    const project = state.project.present;
    const outputRoot = remote.app.getPath("temp") + uuid();

    await buildProject(project, {
      projectRoot,
      buildType,
      outputRoot,
      tmpPath: remote.app.getPath("temp"),
      progress: message => {
        if (
          message !== "'" &&
          message.indexOf("unknown or unsupported #pragma") === -1
        ) {
          dispatch({ type: types.CMD_STD_OUT, text: message });
        }
      },
      warnings: message => {
        dispatch({ type: types.CMD_STD_ERR, text: message });
      }
    });

    if (exportBuild) {
      await fs.copy(
        `${outputRoot}/build/${buildType}`,
        `${projectRoot}/build/${buildType}`
      );
    }

    if (ejectBuild) {
      await fs.copy(`${outputRoot}`, `${projectRoot}/eject`);
    }

    dispatch({ type: types.CMD_COMPLETE });

    return {
      outputRoot
    };
  } catch (e) {
    if (typeof e === "string") {
      dispatch({ type: types.CMD_STD_ERR, text: e });
    } else {
      dispatch({ type: types.CMD_STD_ERR, text: e.toString() });
    }
    dispatch({ type: types.CMD_COMPLETE });
    throw e;
  }
};
