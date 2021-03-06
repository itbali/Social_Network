import React, {useState, ChangeEvent, useEffect} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {

    let [localState, setLocaleState] = useState({
        editMode: false,
        status: props.status
    })
    //local state

    useEffect(() => {
        if (localState.status !== props.status) {
            setLocaleState({...localState, status: props.status})
        }
    }, [localState, props.status])

    let activateEditMode = () => {
        setLocaleState({...localState, editMode: true})
    }
    let deactivateEditMode = () => {
        setLocaleState({...localState, editMode: false})
        props.updateStatus(localState.status)
    }
    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocaleState({...localState, status: e.target.value})
    }

    return (

        <div>
            {!localState.editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
                : <div>
                    <input
                        autoFocus
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        type="text"
                        value={localState.status}
                    />
                </div>
            }
        </div>

    );
});
