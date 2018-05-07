/*
 *
 * Sidebar actions
 *
 */

import {
  SIDEBAR_GET_DATA,
  SIDEBAR_GET_DATA_SUCCESS,
  SIDEBAR_GET_DATA_ERROR,
  SIDEBAR_SELECT_ITEM,
  SIDEBAR_GET_TEAMS,
  SIDEBAR_GET_TEAMS_SUCCESS,
  SIDEBAR_GET_TEAMS_ERROR
} from './constants'

export function getSidebar(params) {
  return {
    type: SIDEBAR_GET_DATA,
    params
  };
}

export function getSidebarComplete(data) {
  return {
    type: SIDEBAR_GET_DATA_SUCCESS,
    data
  }
}

export function getSidebarFail(error) {
  return {
    type: SIDEBAR_GET_DATA_ERROR,
    error
  }
}

export function getTeams() {
  return {
    type: SIDEBAR_GET_TEAMS
  }
}

export function getTeamsComplete(data) {
  return {
    type: SIDEBAR_GET_TEAMS_SUCCESS,
    data
  }
}

export function getTeamsFail(error) {
  return {
    type: SIDEBAR_GET_TEAMS_ERROR,
    error
  }
}


export function selectSidebarItem(data) {
  return {
    type: SIDEBAR_SELECT_ITEM,
    data
  }
}
