import random
def adivinar_canica():
    cantidad = int(input("Ingrese la cantidad total de canicas: "))
    colores = {}
    total_canicas = 0
    while total_canicas < cantidad:
        color = input(f"Ingrese el color de las canicas ({cantidad - total_canicas} restantes): ")
        cantidad_color = int(input(f"Ingrese la cantidad de canicas {color}: "))
        colores[color] = colores.get(color, 0) + cantidad_color
        total_canicas += cantidad_color
    canicas_disponibles = list(colores.keys())
    canica_objetivo = random.choice(canicas_disponibles)
    intentos = 0
    aciertos = 0
    probabilidad_colores = {color: 0 for color in colores.keys()}
    while True:
        intentos += 1
        canica_adivinada = input("Adivine el color de la canica: ")
        if canica_adivinada == canica_objetivo:
            aciertos += 1
            print("¡Correcto! Has adivinado el color de la canica.")
            canicas_disponibles.remove(canica_objetivo)
            if len(canicas_disponibles) == 0:
                print("¡Felicidades! Has adivinado todos los colores de las canicas.")
                break
            else:
                canica_objetivo = random.choice(canicas_disponibles)
                intentos = 0
        else:
            for color in probabilidad_colores:
                probabilidad_colores[color] = aciertos / intentos * 100 if intentos > 0 else 0
            print("Incorrecto. Sigue intentando.")
            if intentos == 10:
                print("Has alcanzado el límite de intentos.")
                break
        print("Probabilidad de acertar en cada color:")
        for color, probabilidad in probabilidad_colores.items():
            print(f"{color}: {probabilidad}%")
    jugar_nuevamente = input("¿Deseas jugar nuevamente? (s/n): ")
    if jugar_nuevamente.lower() == "s":
        adivinar_canica()
adivinar_canica()
import random
def adivinar_canica():
    cantidad = int(input("Ingrese la cantidad total de canicas: "))
    colores = {}
    total_canicas = 0
    while total_canicas < cantidad:
        color = input(f"Ingrese el color de las canicas ({cantidad - total_canicas} restantes): ")
        cantidad_color = int(input(f"Ingrese la cantidad de canicas {color}: "))
        colores[color] = colores.get(color, 0) + cantidad_color
        total_canicas += cantidad_color
    canicas_disponibles = list(colores.keys())
    canica_objetivo = random.choice(canicas_disponibles)
    intentos = 0
    aciertos = 0
    probabilidad_colores = {color: 0 for color in colores.keys()}
    while True:
        intentos += 1
        canica_adivinada = input("Adivine el color de la canica: ")
        if canica_adivinada == canica_objetivo:
            aciertos += 1
            print("¡Correcto! Has adivinado el color de la canica.")
            canicas_disponibles.remove(canica_objetivo)
            if len(canicas_disponibles) == 0:
                print("¡Felicidades! Has adivinado todos los colores de las canicas.")
                break
            else:
                canica_objetivo = random.choice(canicas_disponibles)
                intentos = 0
        else:
            for color in probabilidad_colores:
                probabilidad_colores[color] = aciertos / intentos * 100 if intentos > 0 else 0
            print("Incorrecto. Sigue intentando.")
            if intentos == 10:
                print("Has alcanzado el límite de intentos.")
                break
        print("Probabilidad de acertar en cada color:")
        for color, probabilidad in probabilidad_colores.items():
            print(f"{color}: {probabilidad}%")
    jugar_nuevamente = input("¿Deseas jugar nuevamente? (s/n): ")
    if jugar_nuevamente.lower() == "s":
        adivinar_canica()
adivinar_canica()
