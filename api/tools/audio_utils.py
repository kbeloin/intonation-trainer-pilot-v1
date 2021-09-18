from django.core.files.temp import NamedTemporaryFile
import parselmouth as snd
from .custom_audio_convert import write
import numpy as np
import json

def analyze_pitch(f):
        s = snd.Sound(f.name)

        pitch = s.to_pitch()
        pitch_values = pitch.selected_array['frequency']

        x_y_data = list(zip(pitch.xs().tolist(), pitch_values.tolist()))
        x_lim, y_lim = (0, pitch.ceiling)
        x_y = [{'x': tup[0], 'y': tup[1]} for tup in x_y_data]
        return json.dumps({'x_y': x_y})
