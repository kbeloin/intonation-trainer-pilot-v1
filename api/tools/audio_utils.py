from django.core.files.temp import NamedTemporaryFile
import parselmouth as snd
from .custom_audio_convert import write
import numpy as np
import json

def remove_outiers(arr):
    
    u = np.mean(arr)
    s = np.std(arr)
    filtered = [e if (u - 2 * s < e < u + 2 * s) else 0 for e in arr]
    

    return filtered

def analyze_pitch(f):
        s = snd.Sound(f.name)

        pitch = s.to_pitch()
        pitch_values = pitch.selected_array['frequency']

        x_y_data = list(zip(remove_outiers(pitch.xs()), remove_outiers(pitch_values)))
        x_lim, y_lim = (0, pitch.ceiling)
        x_y = [{'x': tup[0], 'y': tup[1]} for tup in x_y_data]
        return json.dumps({'x_y': x_y})
