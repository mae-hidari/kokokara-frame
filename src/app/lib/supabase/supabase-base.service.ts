import { Observable, from, map } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response';

import { SupabaseClientService } from './supabase-client.service';

import { FindFilter, FindOrder } from './supabase-query-helper.type';

export class SupabaseBaseService<T> {
  // テーブル名
  protected resource: string;

  constructor(protected client: SupabaseClientService, resource: string) {
    this.resource = resource;
  }

  find(
    filters: FindFilter[],
    select = '*',
    range = [0, 10],
    orders: FindOrder[] = [],
  ): Observable<ApiResponse<T[]>> {
    const query = this.client.table(this.resource).select(select);

    filters.forEach(([column, op, value]) => {
      query.filter(column, op, value);
    });

    orders.forEach(([column, ascending]) => {
      query.order(column, { ascending });
    });

    query.range(range[0], range[1]);

    return from(query).pipe(
      map((res) => {
        return {
          data: res.data,
          error: res.error,
          status: res.status,
        } as ApiResponse<T[]>;
      }),
    );
  }

  create(model: Partial<T>): Observable<ApiResponse<T>> {
    const query = this.client
      .table(this.resource)
      .insert({ ...model })
      .single();

    return from(query).pipe(
      map((res) => {
        return {
          data: res.data,
          error: res.error,
          status: res.status,
        } as ApiResponse<T>;
      }),
    );
  }
}
