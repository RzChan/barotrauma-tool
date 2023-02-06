import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalProps as RSModalProps } from 'reactstrap';
import { filter, Dictionary } from 'lodash';


interface State
{
	modals: Dictionary<ModalProps>
}

interface ModalProps
{
	id: string;
	title?: string;
	body: string | JSX.Element;
	option: ModalOption;
	modalProps: RSModalProps;
	onOk: () => void;
	onYes: () => void;
	onNo: () => void;
}

interface ModalOption
{
	/** 顯示 Modal Header */
	showHeader: boolean;
	/** 顯示 Modal Footer */
	showFooter: boolean;
	/** Modal 類型 */
	type: "ok" | "yesno" | "custom";
	/** 按下 Ok 按鈕時觸發的事件 */
	onOk?: () => void;
	/** 按下 Yes 按鈕時觸發的事件 */
	onYes?: () => void;
	/** 按下 No 按鈕時觸發的事件 */
	onNo?: () => void;
	/** 允許以 Enter 鍵觸發按鈕 (預設: false) */
	allowEnter: boolean;
}

let modalIndex = 0;
const GenIndex = () =>
{
	modalIndex++;
	if (modalIndex > 999) modalIndex = 0;
	return modalIndex;
}

type OpenFunc = (content: string | JSX.Element, title?: string, option?: (option: ModalOption) => void, setModalProps?: (option: RSModalProps) => void) => string;

let OpenInstance: OpenFunc | null = null;
export const Open: OpenFunc = (...param) =>
{
	if (OpenInstance) return OpenInstance(...param);
	console.error("Modal 'Open' is not ready yet, but get called.");
	return "";
}

type CloseFunc = (id: string) => void;

let CloseInstance: CloseFunc | null = null;
export const Close: CloseFunc = (...param) =>
{
	if (CloseInstance) return CloseInstance(...param);
	console.error("Modal 'Close' is not ready yet, but get called.");
	return "";
}

class MsgModal extends React.Component<any, State>
{
	constructor(props: any)
	{
		super(props);

		this.state = {
			modals: {}
		};

		OpenInstance = this.Open.bind(this);
		CloseInstance = this.Close.bind(this);
	}

	private onKeyDown = (e: KeyboardEvent) =>
	{
		if (e.keyCode === 13)
		{
			if (this.state.modals)
			{
				const targets = filter(this.state.modals, item => item.option.allowEnter);
				const reverse = targets.reverse();
				const last = reverse.length > 0 ? reverse[0] : null;

				if (last !== null)
				{
					const target = last;
					if (target.option.type === "ok")
					{
						e.stopPropagation();
						e.preventDefault();
						target.onOk();
					}
				}
			}
		}
	}

	componentDidMount()
	{
		window.addEventListener("keydown", this.onKeyDown);
	}

	componentWillUnmount()
	{
		window.removeEventListener("keydown", this.onKeyDown);
	}

	private Toggle = (modal_id: string) =>
	{
		this.setState(prevState =>
		{
			/*modals: {
				...prevState.modals,
				[modal_id]: {
					...prevState.modals[modal_id],
					modalProps: {
						...prevState.modals[modal_id].modalProps,
						isOpen: !prevState.modals[modal_id].modalProps.isOpen
					}
				}
			}*/

			const modals = {
				...prevState.modals
			}

			delete modals[modal_id];

			return { modals };
		});
	}

	public Open(content: string | JSX.Element, title?: string, option?: (option: ModalOption) => void, setModalProps?: (option: RSModalProps) => void)
	{
		let getOption: ModalOption = { showHeader: true, showFooter: true, type: "ok", allowEnter: false };
		let getModalProps: RSModalProps = { isOpen: true, toggle: () => this.Toggle(id), centered: true };
		if (option) option(getOption);
		if (setModalProps) setModalProps(getModalProps);

		const onOk = () =>
		{
			if (getOption.onOk) getOption.onOk();
			if (getModalProps.toggle) (getModalProps.toggle as () => void)();
		}
		const onYes = () =>
		{
			if (getOption.onYes) getOption.onYes();
			if (getModalProps.toggle) (getModalProps.toggle as () => void)();
		}
		const onNo = () =>
		{
			if (getOption.onNo) getOption.onNo();
			if (getModalProps.toggle) (getModalProps.toggle as () => void)();
		}

		const id = GenIndex().toString();
		let newModalProps: ModalProps = {
			id,
			title: title,
			body: content,
			option: getOption,
			modalProps: getModalProps,
			onOk,
			onYes,
			onNo
		};

		this.setState(prevState => ({
			modals: {
				...prevState.modals,
				[id]: newModalProps
			}
		}));

		return newModalProps.id;
	}

	public Close(id: string): void
	{
		this.Toggle(id);
	}

	renderModals()
	{
		let result: JSX.Element[] = [];
		const modals = this.state.modals;
		for (let key in modals)
		{
			const item = modals[key];
			const type = item.option.type;
			//const toggle = item.modalProps.toggle;
			if (type === "ok" || type === "yesno")
			{
				/*const onOk = () =>
				{
					if (item.option.onOk) item.option.onOk();
					if (toggle) toggle();
				}
				const onYes = () =>
				{
					if (item.option.onYes) item.option.onYes();
					if (toggle) toggle();
				}
				const onNo = () =>
				{
					if (item.option.onNo) item.option.onNo();
					if (toggle) toggle();
				}*/
				result.push(< Modal key={key} {...item.modalProps}>
					<ModalHeader toggle={item.modalProps.toggle as () => void}>{item.title}</ModalHeader>
					<ModalBody>
						<div className="w3-center">{item.body}</div>
						<div className="w3-center" style={{ marginTop: "20px" }}>
							{type === "ok" ? <Button color="primary" onClick={item.onOk}>確認</Button> : null}
							{type === "yesno" ? <>
								<Button color="primary" onClick={item.onYes} style={{ minWidth: "100px" }}>是</Button>
								<Button color="danger" onClick={item.onNo} style={{ minWidth: "100px" }} className="ml-4">否</Button>
							</> : null}
						</div>
					</ModalBody>
				</Modal>);
			}
			else if (type === "custom")
			{
				result.push(<Modal key={key} {...item.modalProps}>
					{item.option.showHeader ? <ModalHeader toggle={item.modalProps.toggle as () => void}>{item.title}</ModalHeader> : null}
					<ModalBody>
						{item.body}
					</ModalBody>
					{item.option.showFooter ? <ModalFooter></ModalFooter> : null}
				</Modal>);
			}
			else
			{
				console.error("not a valid type for modal");
			}
		}

		return result;
	}

	render()
	{
		return <>{this.renderModals()}</>;
	}
}

export default MsgModal;