#!/usr/bin/env python3
"""
measure the runtime of wait_n function, from task 1
"""

import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Args:
        n (int): Number of coroutines to run.
        max_delay (int): Maximum delay for each coroutine.

    Returns:
        float: The average runtime per coroutine.
    """
    # tiempo de inicio
    start_time = time.time()

    # Ejecuta la función async wait_n
    asyncio.run(wait_n(n, max_delay))

    # tiempo de finalización
    end_time = time.time()

    # Calcula el tiempo total transcurrido
    total_time = end_time - start_time

    # Calcula y devuelve el tiempo promedio por ejecución
    return total_time / n
