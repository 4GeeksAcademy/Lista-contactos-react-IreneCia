
const ContactServices = {
    getContacts: async () => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Irene`);
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
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Irene`, {
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
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/Irene?tags=Agenda%20operations&summary=Delete%20Agenda.&description=Deletes%20a%20specific%20agenda%20from%20the%20database.{id}`, {
            method: "DELETE",
        });
       
        return Response.ok;
    } catch (error) {
        console.error("Error al editar:", error);
        return false;
    }
}
};

export default ContactServices;
// El export siempre al final
