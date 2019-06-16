import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { connect } from "react-redux";
import SpriteSheetCanvas from "./SpriteSheetCanvas";
import { ActorShape } from "../../reducers/stateShape";
import * as actions from "../../actions";

class Actor extends Component {
  onMouseDown = e => {
    // console.log("MOUSE DOWN ACTOR", this.props.id);
    e.stopPropagation();
    e.preventDefault();
    const { id, sceneId, dragActorStart } = this.props;
    dragActorStart(sceneId, id);
    window.addEventListener("mouseup", this.onMouseUp);
  };

  onMouseUp = e => {
    console.log("UP");
    const { dragActorStop } = this.props;
    dragActorStop();
    window.removeEventListener("mouseup", this.onMouseUp);
  };

  render() {
    const { actor, selected } = this.props;
    const { x, y, spriteSheetId, direction, movementType, frame } = actor;
    console.log("render: Actor");
    return (
      <div
        className={cx("Actor", { "Actor--Selected": selected })}
        onMouseDown={this.onMouseDown}
        style={{
          top: y * 8,
          left: x * 8
        }}
      >
        <SpriteSheetCanvas
          spriteSheetId={spriteSheetId}
          direction={direction}
          frame={movementType === "static" ? frame : 0}
        />
      </div>
    );
  }
}

Actor.propTypes = {
  actor: ActorShape,
  selected: PropTypes.bool
};

Actor.defaultProps = {
  actor: {},
  selected: false
};

function mapStateToProps(state, props) {
  const { type: editorType, entityId, scene: sceneId } = state.editor;
  const actor = state.entities.present.entities.actors[props.id];
  const selected =
    editorType === "actors" &&
    sceneId === props.sceneId &&
    entityId === props.id;
  return {
    actor,
    selected
  };
}

const mapDispatchToProps = {
  dragActorStart: actions.dragActorStart,
  dragActorStop: actions.dragActorStop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Actor);
