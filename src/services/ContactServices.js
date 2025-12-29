
const ContactServices = {
    getContacts: async () => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Irene/contacts`);
            if (!response.ok) throw new Error("Error en la petición GET");
            const data = await response.json();
            return data.contacts || [];
        } catch (error) {
            console.error("Error al obtener contactos:", error);
            return [];
        }
    },

    createContact: async (contactObject) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Irene/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactObject)
            });

            if (response.ok) {
                return await response.json();
            }
            return false;
        } catch (error) {
            console.error("Error al crear contacto:", error);
            return false;
        }
    },

    deleteContact: async (id) => {
        console.log("Intentando borrar el ID:", id);

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Irene/contacts/${id}`, {
                method: "DELETE",
            });

            return response.ok;
        } catch (error) {
            console.error("Error al editar:", error);
            return false;
        }
    }
};

export default ContactServices;

