import React, {Component} from 'react';
import Translate from 'react-translate-component';

const HistoricTag = (props) => {
  return (
    <label className="c-field c-field--choice editor-system-tag">
      <input type="checkbox" checked={props.checked} onChange={props.onChange} /> <Translate content="city.system_tags.historic" />
    </label>
  )
}

class System extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      display: true,
      modified: false,
      name: props.name || '',
      historic: props.historic || false,
      displayDeleteWarning: false
    };

    this.bindedToggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState(Object.assign({},this.state, {display: !this.state.display}));
  }

  onDragEnter(e) {
    e.preventDefault();
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDragLeave(e) {
    e.preventDefault();
  }

  onDrop(e) {
    const lineUrlName = e.dataTransfer.getData('text');
    this.props.onLineDragged(lineUrlName, this.props.id);
  }

  onChange(e) {
    this.setState(Object.assign({}, this.state, {name: e.target.value, modified: true}));
  }

  onHistoricChange(e) {
    this.setState({historic: e.target.checked, modified: true});
  }

  onSave() {
    this.setState(Object.assign({}, this.state, {modified: false}));
    this.props.onSave({id: this.props.id, name: this.state.name, historic: this.state.historic});
  }

  onDelete() {
    this.setState(Object.assign({}, this.state, {displayDeleteWarning: true}));
  }

  onCancelDelete() {
    this.setState(Object.assign({}, this.state, {displayDeleteWarning: false}));
  }

  onActualDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    const deleteWarningControl = <span className="c-input-group" style={{float:'right'}}>
        <button className="c-button" onClick={this.onActualDelete.bind(this)} ><Translate content="editor.lines_editor.delete" /></button>
        <button className="c-button" onClick={this.onCancelDelete.bind(this)}><Translate content="editor.lines_editor.cancel" /></button>
      </span>;

    return (
       <div ref="container" className="c-card lines-editor-container"
        onDragEnter={this.onDragEnter.bind(this)}
        onDragOver={this.onDragOver.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
        onDrop={this.onDrop.bind(this)} >

        <div className="c-card__item c-card__item--brand">
          <span className={`system-toggle fa ${this.state.display ? 'fa-angle-left' : 'fa-angle-down'}`} onClick={this.bindedToggleDisplay}></span>
          <Translate
            component="input"
            className="c-field system-name"
            type="text"
            onChange={this.onChange.bind(this)}
            value={this.state.name}
            attributes={{placeholder: "editor.lines_editor.unnamed_system"}} />
            <HistoricTag checked={this.state.historic} onChange={this.onHistoricChange.bind(this)} />
          { this.state.displayDeleteWarning ? deleteWarningControl : null }
          { this.state.modified && !this.state.displayDeleteWarning &&
            <button className="c-button c-button--info save-system" onClick={this.onSave.bind(this)}>
              <Translate content="editor.lines_editor.save" />
            </button> }
          { !this.props.children[0].length && !this.state.displayDeleteWarning &&
            <button style={{float: 'right'}} className="c-button" onClick={this.onDelete.bind(this)}>
              <Translate content="editor.lines_editor.delete" />
            </button> }
        </div>
        {this.state.display ? this.props.children : null}
       </div>
      )
  }
}


class NewSystem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {name: '', historic: false};
  }

  onChange(e) {
    this.setState({name: e.target.value});
  }

  onHistoricChange(e) {
    this.setState({historic: e.target.checked, modified: true});
  }

  onSave() {
    this.props.onCreate(this.state);
    this.reset();
  }

  reset() {
    this.setState({name: '', historic: false});
  }

  render() {
    return (
      <div ref="container" className="c-card lines-editor-container new-system">
        <div className="c-card__item c-card__item--brand">
          <Translate
            component="input"
            className="c-field system-name"
            type="text"
            onChange={this.onChange.bind(this)}
            value={this.state.name}
            attributes={{placeholder:"editor.lines_editor.new_system_placeholder"}} />
            <HistoricTag checked={this.state.historic} onChange={this.onHistoricChange.bind(this)} />
          { this.state.name &&
          <button className="c-button c-button--info save-system" onClick={this.onSave.bind(this)}>
            <Translate content="editor.lines_editor.create" />
          </button> }
        </div>
      </div>
    )
  }
}

export {System, NewSystem}
