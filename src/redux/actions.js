export function toggleModal(modalId) {
    return {
        type: 'TOGGLE_MODAL',
        payload: {
            modalId
        }
    }
}