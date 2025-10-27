import {Dialog, DialogTitle, DialogContent, Typography, Box } from "@mui/material";
import usePersonImages from "../../hooks/usePersonImages";

const ActorPopUp = ({ actor, onClose }) => {
    const {data: images, isPending } = usePersonImages(actor.id);

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>{actor.name}</DialogTitle>
            <DialogContent>
                {isPending ? (
                    <Typography>Loading images...</Typography>
                ) : images?.profiles?.length? (
                    <Box sx={{ display: "flex", gap: 2 }}>
                        {images.profiles.map((img, i) => (
                            <img
                                key={i}
                                src={`https://image.tmdb.org/t/p/w300/${img.file_path}`}
                                alt={'Profile ${i}'}
                                style={{ width: "150px", borderRadius: "8px" }}
                                />
                        ))}
                    </Box>
                ) : (
                    <Typography>No images available</Typography>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ActorPopUp
