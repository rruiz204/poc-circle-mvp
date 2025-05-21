import { reactive } from "vue";
import type { KhaosResponse } from "@Services/Khaos/KhaosService";
type Service<Model> = () => Promise<KhaosResponse<Model>>;

interface State {
  loading: boolean;
  error: string | null;
};

export function useKhaos() {
  const state = reactive<State>({
    loading: false, error: null,
  });

  const wrapper = async <Model>(service: Service<Model>) => {
    state.loading = true;
    state.error = null;

    const response = await service();
    if (response.error) state.error = response.error.message;
    else state.error = null;

    state.loading = false;
    return response;
  };

  return { state, wrapper };
};